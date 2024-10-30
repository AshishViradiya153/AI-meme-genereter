"use client"
import { useState } from "react";

export default function MemeGenerator() {
    const [prompt, setPrompt] = useState('');
    const [description, setDescription] = useState('');
    const [memeText, setMemeText] = useState('');
    const [imageUrl, setImageUrl] = useState('');

    const handleGenerateText = async () => {
        const response = await fetch('/api/generateMemeText', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ prompt }),
        });
        const data = await response.json();
        setMemeText(data.memeText);
    };

    const handleGenerateImage = async () => {
        const response = await fetch('/api/generateMemeImage', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ description }),
        });
        const data = await response.json();
        setImageUrl(data.imageUrl);
    };

    return (
        <div>
            <h1>Meme Generator</h1>

            <div>
                <h2>Generate Meme Text</h2>
                <input
                    type="text"
                    value={prompt}
                    onChange={(e) => setPrompt(e.target.value)}
                    placeholder="Enter a description for meme text"
                />
                <button onClick={handleGenerateText}>Generate Text</button>
                {memeText && <p>Meme Text: {memeText}</p>}
            </div>

            <div>
                <h2>Generate Meme Image</h2>
                <input
                    type="text"
                    value={description}
                    onChange={(e) => setDescription(e.target.value)}
                    placeholder="Enter a description for meme image"
                />
                <button onClick={handleGenerateImage}>Generate Image</button>
                {imageUrl && <img src={imageUrl} alt="Generated Meme" width={600} height={600} />}
            </div>
        </div>
    );
}
