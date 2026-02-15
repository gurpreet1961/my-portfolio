import axios from 'axios';

const GITHUB_USERNAME = 'gurpreet1961';
const API_URL = `https://api.github.com/users/${GITHUB_USERNAME}/repos`;

export interface Project {
    id: number;
    name: string;
    description: string;
    html_url: string;
    homepage: string;
    language: string;
    stargazers_count: number;
    topics: string[];
}

export const fetchGitHubProjects = async (): Promise<Project[]> => {
    try {
        // Fetch repos sorted by update time
        const response = await axios.get(`${API_URL}?sort=updated&per_page=10`);
        return response.data;
    } catch (error) {
        console.error('Error fetching GitHub projects:', error);
        return [];
    }
};
