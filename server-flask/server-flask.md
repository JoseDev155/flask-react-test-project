# Server Flask

## Configure backend with Flask (Python)

Create dir at the same level as our frontend:

```bash
mkdir server-flask
```

Move to the dir:

```bash
cd server-flask
```

Create a virtual environment:

```bash
python -m venv <environment-name>
```

Activate virtual environment:

```bash
./<environment-name>\Scripts\Activate.ps1
```

Install dependencies specified in the file `requirements.txt`:

```bash
pip install -r requirements.txt
```

## `flask-cors` dependency

To enable HTTP requests from our React project, install the `flask-cors` dependency.