# Bluesky Trending Topics
<div align="center">
    <div style="font-size: 14px; font-weight: bold;">
        🌐 Other languages:
    </div>
    <a href="https://github.com/Rafael-BD/Bsky-Trends/blob/main/assets/README-PT.MD">• Português</a>
</div>

## Description

This project extracts real-time post trends and stores them in a database. The project uses natural language processing techniques to analyze the posts and extract trends. The trends are stored in Supabase for later querying.

## Technologies Used

- **Supabase**: Database to store the trends.
- **Compromise**: NLP library for text processing.
- **Google Gemini**: Generative AI API to classify topics.
<!-- - **Web Workers**: For parallel processing of posts. -->

## Features

- **N-grams Extraction**: Extraction of words, phrases, and hashtags from posts.
- **Content Filtering**: Filtering of stopwords, blacklist words, and irrelevant content.
- **Text Classification**: Topic classification using a text classifier.
- **Trend Storage**: Storage of trends in Supabase.
<!-- - **Parallel Processing**: Using a pool of workers for parallel processing of posts. -->

## Requirements

- **Node.js**: Install [Node.js](https://nodejs.org/) to run the project.
- **Supabase (optional)**: Set up an account on [Supabase](https://supabase.com/) and obtain the necessary credentials.
- **Google Gemini API Key (optional)**: Set up an account on [Google Cloud](https://cloud.google.com/) and create a project with the _Generative Language API (Gemini API)_ enabled and obtain the API key from https://aistudio.google.com/app/apikey.

The use of **Supabase** is optional and **Google Gemini** is used only to classify topics. You can replace these services with others of your choice.

## Installation

1. Clone the repository:

    ```sh
    git clone https://github.com/Rafael-BD/Bsky-Trends
    cd Bsky-Trends
    ```

2. Set up the environment variables in the `.env` file:

    ```sh
    SUPABASE_URL=your_supabase_url
    SVC_KEY=your_supabase_key
    GOOGLE_API_KEY=your_google_api_key
    DEV=true # Set to false in production
    ```
3. Create a Supabase table named `trends` with the following columns:

    - `id`
    - `trend` (jsonb)
    - `lang` (text)
    - `updated_at` (TIMESTAMPZ)
4. Create a Supabase Storage bucket named `checkpoints` to store the trends checkpoints that are used to the server to recover the trends in case of a restart.

## Usage

1. Install the dependencies:

    ```sh
    npm install
    ```
    or
    ```sh
    bun install
    ```

2. Start the WebSocket client to listen to posts:

    ```sh
    npm run start
    ```
    or
    ```sh
    bun server.ts
    ```

    Now make GET requests to `http://localhost:8003/trending` to get the trends.

## Feature Explanation

### N-grams Extraction

The project extracts words, phrases, and hashtags from posts using NLP techniques. The extraction is done through the `extractWords`, `extractSentences`, and `extractHashtags` functions.

### Content Filtering

The extracted content is filtered to remove stopwords, blacklist words, and irrelevant content. The filtering is done through the `filterWords` and `filterSentences` functions.

### Text Classification

The extracted topics are classified using Google Gemini AI. The classification is done through the `classifyText` function.

### Trend Storage

The trends are stored in Supabase. The storage is done through the `services/saveTrends.ts` file.

<!-- ### Parallel Processing

The project uses a pool of workers to process posts efficiently. The worker pool is implemented in the `workerPool.ts` file. -->

## Public API

The project also has a public API to get the trends. The API documentation is available at https://github.com/Rafael-BD/Bsky-Trends-API.

## Contribution

Contributions are welcome! Feel free to open issues and pull requests.

