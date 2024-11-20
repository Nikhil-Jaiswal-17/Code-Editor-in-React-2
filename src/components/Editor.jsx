import Navbar from "./Navbar";
import { useState, useEffect } from "react";
import './Editor.css'

function Editor() {

    const languages = {
        javascript: 'javascript',
        html: 'markup',
        css: 'css',
        jsx: 'jsx',
    };

    const [code, setCode] = useState(`
function sayHello() {
console.log("Hello, world!");
}
sayHello();
        `);
    const [highlightedCode, setHighlightedCode] = useState('');

    const updateHighlightedCode = (newCode, language) => {
        const highlighted = Prism.highlight(newCode, Prism.languages[language], language);
        setHighlightedCode(highlighted);
    }


    // Sync highlighted code whenever the `code` state changes
    useEffect(() => {
        updateHighlightedCode(code, languages.jsx);
    }, [code]);

    // Handle changes in the textarea
    const handleCodeChange = (e) => {
        setCode(e.target.value);
    };



    return (
        <div className="code-container">
            <Navbar></Navbar>
            <a href="#">GITHUB</a>
            <div className="editor-container">
                <textarea
                    className="editor-textarea"
                    value={code}
                    onChange={handleCodeChange}
                    spellCheck={false}
                    wrap="off"
                    placeholder={`Write your code here...`} />
            </div>

            <div className="code-preview-container">
                <pre className="code-preview">
                    <code
                    className={`language-${languages.jsx}`}
                    dangerouslySetInnerHTML={{ __html: highlightedCode }}
                    />
                </pre>
            </div>

        </div>
    )
}

export default Editor
