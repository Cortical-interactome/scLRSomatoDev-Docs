# scLRSomatoDev-Docs

This is the source code that generate the static documentation site using MkDocs (open-source static site generator designed specifically for building documentation websites).

## Installation to develop the website

**Prerequisites:**

- Python >=3.11 installed
- [uv](https://github.com/astral-sh/uv) installed (recommended for dependency management)

**Step 1:** Clone the repository:

```bash
git clone https://github.com/LSeu-Open/LLMScoreEngine.git
```

**Step 2:** Create and activate a virtual environment:

Using uv (recommended):

```bash
# Create a virtual environment
uv venv mkdocs

# Activate the virtual environment
# On Windows:
.mkdocs\Scripts\activate
# On Unix or MacOS:
source .mkdocs/bin/activate
```

**Step 3:** Install the dependencies:

```bash
uv pip install -r requirements.txt
```

**Step 4:** Run the development server:

```bash
mkdocs serve
```
**Step 5:** Work on the website :

- Edit the files in the `docs` directory.
- Edit the `mkdocs.yml` file to change the navigation and other settings.
- The website will automatically update when you save the files.


