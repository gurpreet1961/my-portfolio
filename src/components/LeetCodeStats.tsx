import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import axios from 'axios';

interface LeetCodeData {
    totalSolved: number;
    easySolved: number;
    mediumSolved: number;
    hardSolved: number;
    totalQuestions: number;
    acceptanceRate: number;
    ranking: number;
    contributionPoints: number;
}

const LeetCodeStats: React.FC = () => {
    const [data, setData] = useState<LeetCodeData | null>(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(false);

    useEffect(() => {
        const fetchLeetCodeData = async () => {
            try {
                // Using a proxy to avoid CORS if needed, or direct if API allows.
                // For this demo, we'll try the common public API.
                const response = await axios.get('https://leetcode-stats-api.herokuapp.com/gurpreet1961');
                if (response.data.status === 'error') throw new Error(response.data.message);
                setData(response.data);
            } catch (err) {
                console.error("Failed to fetch LeetCode data", err);
                setError(true);
            } finally {
                setLoading(false);
            }
        };

        fetchLeetCodeData();
    }, []);

    if (loading) return <div className="text-center text-gray-400">Loading LeetCode stats...</div>;
    if (error || !data) return <div className="text-center text-gray-500">LeetCode stats unavailable.</div>;

    const total = data.totalSolved;
    const easy = data.easySolved;
    const medium = data.mediumSolved;
    const hard = data.hardSolved;

    return (
        <div className="bg-[var(--color-bg)]/50 p-6 rounded-xl border border-[var(--color-text)]/10 hover:border-yellow-500/50 transition-all hover:-translate-y-1 hover:shadow-lg hover:shadow-yellow-500/20">
            <h3 className="text-xl font-bold mb-6 text-center text-yellow-500">LeetCode Progress</h3>

            <div className="flex flex-col md:flex-row items-center justify-around gap-6">
                {/* Circle Chart */}
                <div className="relative w-32 h-32">
                    <svg viewBox="0 0 36 36" className="w-full h-full transform -rotate-90">
                        {/* Background Circle */}
                        <path
                            className="text-gray-700"
                            d="M18 2.0845
                a 15.9155 15.9155 0 0 1 0 31.831
                a 15.9155 15.9155 0 0 1 0 -31.831"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="3"
                        />
                        {/* Easy (Green) */}
                        <motion.path
                            initial={{ pathLength: 0 }}
                            animate={{ pathLength: easy / (total || 1) }} // Simplified visualization
                            className="text-green-500"
                            d="M18 2.0845
                a 15.9155 15.9155 0 0 1 0 31.831
                a 15.9155 15.9155 0 0 1 0 -31.831"
                            fill="none"
                            stroke="currentColor"
                            strokeDasharray={`${(easy / total) * 100}, 100`}
                            strokeWidth="3"
                        />
                    </svg>
                    <div className="absolute inset-0 flex flex-col items-center justify-center">
                        <span className="text-2xl font-bold text-white">{total}</span>
                        <span className="text-xs text-gray-400">Solved</span>
                    </div>
                </div>

                {/* Stats List */}
                <div className="space-y-3 w-full max-w-xs">
                    <div className="flex justify-between items-center text-sm">
                        <span className="text-gray-300">Easy</span>
                        <span className="text-green-400 font-bold">{easy}</span>
                    </div>
                    <div className="h-2 w-full bg-gray-700 rounded-full overflow-hidden">
                        <motion.div
                            initial={{ width: 0 }}
                            whileInView={{ width: `${(easy / total) * 100}%` }}
                            className="h-full bg-green-500"
                        />
                    </div>

                    <div className="flex justify-between items-center text-sm">
                        <span className="text-gray-300">Medium</span>
                        <span className="text-yellow-400 font-bold">{medium}</span>
                    </div>
                    <div className="h-2 w-full bg-gray-700 rounded-full overflow-hidden">
                        <motion.div
                            initial={{ width: 0 }}
                            whileInView={{ width: `${(medium / total) * 100}%` }}
                            className="h-full bg-yellow-500"
                        />
                    </div>

                    <div className="flex justify-between items-center text-sm">
                        <span className="text-gray-300">Hard</span>
                        <span className="text-red-400 font-bold">{hard}</span>
                    </div>
                    <div className="h-2 w-full bg-gray-700 rounded-full overflow-hidden">
                        <motion.div
                            initial={{ width: 0 }}
                            whileInView={{ width: `${(hard / total) * 100}%` }}
                            className="h-full bg-red-500"
                        />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default LeetCodeStats;
