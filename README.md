# GenHack'24

## Development Environment Setup

To contribute to the project, follow these steps to set up your development environment:

### Install Node.js
Ensure you have Node.js installed. You can download it from [here](https://nodejs.org/).

---

## Project Installation

1. **Clone the Repository**:  
   Clone the project repository using the following command:
   ```bash
   git clone <repository-url>
   ```

2. **Install Dependencies**:  
   Navigate to the project directory and install all necessary dependencies:
   ```bash
   npm install
   ```

3. **Run the Development Server**:  
   Start the project in development mode:
   ```bash
   npm run dev
   ```

---

## Contribution Guidelines

### General Development Guidelines

- **Mobile Responsiveness**:  
  All components created must be fully responsive across mobile, tablet, and desktop devices.

- **Code Quality and Best Practices**:  
  Ensure that your code follows established best practices for **clean code**, **modularization**, **readability**, and **performance**.
  - Use semantic HTML tags.
  - Keep CSS styles organized following proper TailwindCSS guidelines.
  - Ensure that all components are optimized for performance.

- **Component Structure**:  
  Only use the `/components` folder assigned to your specific section. Do **not** create a common `/components` folder or modify components outside of your assigned section to avoid confusion and merge conflicts.

---

### Pull Requests

- **Commit Changes**:  
  Ensure all changes are committed with meaningful commit messages. Follow this convention for commit messages:
  ```bash
  <type>(<scope>): <description>
  ```
  Example:
  ```
  feat(ButtonComponent): add mobile responsiveness
  ```

- **Branch Naming**:  
  Create a new branch for your changes. Use the following naming convention for branches:
  ```
  <ComponentName:YourName>
  ```

- **Create Pull Request**:  
  Submit a pull request (PR) addressing **only a single issue** at a time. Make sure to address all feedback and comments. Be prepared to do follow-up changes if necessary.

---

### Workflow

- **Issues and PRs**:  
  Each pull request should address **only one issue**. Do not combine multiple issues into a single PR.

- **Task Assignment**:  
  Work only on the tasks assigned to you. Avoid making changes to components or PRs that belong to other team members unless specifically requested.

- **Testing**:  
  Thoroughly test your components before submitting them, ensuring they work across different screen sizes.

---

## Website Reference

- Visit the reference website for design and functionality context:  
  [Hackathon Website](https://hackathon.ffdc.io/)

---

## Resources

Use the following resources for development:

- [Next.js Documentation](https://nextjs.org/docs)
- [TailwindCSS Documentation](https://tailwindcss.com/docs/installation)
- [Shadcn/UI Documentation](https://ui.shadcn.com/docs)
- [Aceternity UI Components](https://ui.aceternity.com/components)

### Other Important Considerations
- **Version Control**:  
  Ensure that you frequently pull from the main branch to keep your local branch updated and avoid conflicts. Regularly check for conflicts and resolve them quickly.

- **Code Reviews**:  
  Always review the code of other contributors before merging PRs. Follow-up changes should be added through additional commits rather than force-pushing to the same branch.

---

## Design and Assets

- **Font**: To Be Determined (TBD)
- **Color Scheme**:  
  The primary colors are **Purple**, **Black**, and the original palette of the reference website.
  
- **Assets**: Any additional design assets will be uploaded and stored in the project’s designated folder.

---

## Testing and Debugging

- **Browser Compatibility**:  
  Ensure that your components work seamlessly across all major browsers—Chrome, Firefox, Edge, and Safari.

- **Linting and Formatting**:  
  Make sure to run the linter before submitting a PR:
  ```bash
  npm run lint
  ```
  Adhere to the project's formatting standards, ensuring that the code is clean and consistent across the team.

- **Unit Testing** (if applicable):  
  If required, write unit tests for your components. Testing is critical to avoid breaking changes and to ensure smooth functionality across different environments.

---

## Contact Information

For any doubts or clarifications, please reach out to:

- **Hitesh Shivkumar**  
  Contact: +91 93218 40748

