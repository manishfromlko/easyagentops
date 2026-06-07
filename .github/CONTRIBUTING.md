# Contributing to EasyAgentOps

First off, thank you for considering contributing to EasyAgentOps! It's people like you that make EasyAgentOps such a great tool.

## Code of Conduct

This project and everyone participating in it is governed by our Code of Conduct. By participating, you are expected to uphold this code.

## How Can I Contribute?

### Reporting Bugs

Before creating bug reports, please check if the issue has already been reported as you might find that you don't need to create one.

**When creating a bug report, please include:**

- Use a clear and descriptive title
- Describe the exact steps which reproduce the problem
- Provide specific examples to demonstrate the steps
- Describe the behavior you observed after following the steps
- Explain which behavior you expected to see instead and why
- Include screenshots and animated GIFs if possible
- Include your environment details (OS, Node version, Python version, etc.)

### Suggesting Enhancements

Enhancement suggestions are tracked as GitHub issues. When creating an enhancement suggestion, please include:

- Use a clear and descriptive title
- Provide a step-by-step description of the suggested enhancement
- Provide specific examples to demonstrate the steps
- Describe the current behavior
- Describe the proposed behavior
- Explain why this enhancement would be useful

### Pull Requests

- Follow the styleguide
- After you submit your pull request, verify that all status checks are passing
- Include appropriate test cases
- Update documentation accordingly

## Styleguide

### Git Commit Messages

- Use the present tense ("Add feature" not "Added feature")
- Use the imperative mood ("Move cursor to..." not "Moves cursor to...")
- Limit the first line to 72 characters or less
- Reference issues and pull requests liberally after the first line
- Consider starting the commit message with an applicable emoji:
  - 🎨 `:art:` - Improve structure/format
  - 🚀 `:rocket:` - New feature
  - 🐛 `:bug:` - Bug fix
  - 📚 `:books:` - Documentation
  - 🚩 `:triangular_flag_on_post:` - Bugfix
  - ⚡ `:zap:` - Performance improvement
  - ✅ `:white_check_mark:` - Tests
  - 🔒 `:lock:` - Security
  - ⬆️ `:arrow_up:` - Dependency upgrade

### JavaScript/TypeScript Styleguide

- All JavaScript must adhere to ESLint configuration
- Prefer const over let, and let over var
- Use meaningful variable names
- Add comments for complex logic
- Keep functions small and focused

### Python Styleguide

- Follow PEP 8
- Use type hints
- Maximum line length: 100 characters
- Use docstrings for all functions and classes
- Run black and pylint before committing

### Documentation Styleguide

- Use Markdown
- Reference functions/variables with backticks
- Include code examples
- Keep lines to a reasonable length
- Use clear headings

## Development Setup

See [DEVELOPMENT.md](../DEVELOPMENT.md) for detailed setup instructions.

## Testing

- Write tests for all new features
- Ensure all existing tests pass
- Maintain or improve code coverage

### Frontend Testing

```bash
cd frontend
npm test
```

### Backend Testing

```bash
cd backend
pytest
```

## Additional Notes

### Issue and Pull Request Labels

- `bug` - Something isn't working
- `enhancement` - New feature or request
- `documentation` - Improvements or additions to documentation
- `good first issue` - Good for newcomers
- `help wanted` - Extra attention is needed
- `question` - Further information is requested
- `wontfix` - This will not be worked on

## Project Structure

```
easyagentops/
├── frontend/     # Next.js application
├── backend/      # FastAPI application
├── database/     # Database schemas (future)
└── .github/      # GitHub configuration
```

## Key Technologies

- **Frontend**: Next.js, TypeScript, React
- **Backend**: FastAPI, Python
- **Deployment**: GitHub Pages, Docker
- **Version Control**: Git

## Questions?

Don't hesitate to ask questions! You can:

- Open an issue with your question
- Reach out to hello@easyagentops.in
- Check existing discussions

## Recognition

Contributors will be recognized in:
- README.md
- GitHub contributors page
- Release notes

Thank you for contributing! 🎉
