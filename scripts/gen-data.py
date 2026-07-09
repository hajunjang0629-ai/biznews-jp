"""Convert data/articles.json to static/js/data.js (legacy entry point)."""
import subprocess
import sys
from pathlib import Path

subprocess.run(
    [sys.executable, str(Path(__file__).resolve().parent / "sync-articles.py")],
    check=True,
)
