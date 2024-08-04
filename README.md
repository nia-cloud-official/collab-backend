# Collaborator Finder Tool - Backend

This is the backend code for the Collaborator Finder Tool, an application that leverages the GitHub API to help developers find potential collaborators based on specific skills, interests, or contributions.

## Features

- **Search Users by Username**: Find users by their GitHub username.
- **Search Users by Skill**: Discover users based on their repositories, skills, or interests.
- **Search Users by Contributions**: Identify users who have contributed to specific repositories.
- **Filter by Location**: Narrow down search results based on geographical location.
- **User Profiles**: View detailed profiles including repositories, contributions, and activity.

## Prerequisites

- Node.js and npm installed on your machine.
- A GitHub personal access token for accessing the GitHub API.

## Installation

1. **Clone the repository:**

   ```bash
   git clone https://github.com/nia-cloud-official/collaborator-finder-tool-backend.git
   ```

2. **Navigate to the project directory:**

   ```bash
   cd collaborator-finder-tool-backend
   ```

3. **Install dependencies:**

   ```bash
   npm install
   ```

4. **Configure GitHub API token:**

   Create a `.env` file in the root directory and add your GitHub personal access token:

   ```env
   GITHUB_TOKEN=your_github_personal_access_token
   ```

## Usage

1. **Start the server:**

   ```bash
   npm start
   ```

2. The server will run on `http://localhost:3000`.

## API Endpoints

### Search Users by Username

- **Endpoint**: `/api/users/:username`
- **Method**: `GET`
- **Description**: Retrieves user details by GitHub username.

### Search Users by Skills/Repositories

- **Endpoint**: `/api/search`
- **Method**: `GET`
- **Description**: Searches for users based on a query.
- **Query Parameters**:
  - `q`: The search query string.

### Search Users by Contributions

- **Endpoint**: `/api/repos/:owner/:repo/contributors`
- **Method**: `GET`
- **Description**: Lists contributors to a specific repository.

### User Profile

- **Endpoint**: `/api/users/:username`
- **Method**: `GET`
- **Description**: Retrieves detailed user profile information.

## Contributing

We welcome contributions to enhance the functionality of this tool. To contribute:

1. Fork the repository.
2. Create a new branch for your changes.
3. Commit your changes and push the branch.
4. Open a pull request describing your changes.

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.

## Contact

For questions or feedback, please contact [miltonhyndrex@gmail.com](mailto:miltonhyndrex@gmail.com).

---

**Enjoy finding your next collaborator!**
```
