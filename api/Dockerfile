FROM python:3.12-slim

WORKDIR /app

RUN pip install uv

COPY uv.lock pyproject.toml ./

RUN uv sync

COPY . .
