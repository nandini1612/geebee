const jarImage = document.getElementById('jar-image');
const stickyNote = document.getElementById('sticky-note');
const noteContent = document.getElementById('note-content');

const loveNotes = [
    "You are my comfort, my home.",
    "I love you more every single day.",
    "Thinking of you fills my heart with warmth.",
    "You make me feel safe and cherished.",
    "Every second with you feels like a dream.",
    "I can never stop thinking about you.",
    "You changed my life in the best way possible.",
    "Knowing I have you makes me feel invincible.",
    "I wish I could spend forever by your side.",
    "Your voice alone makes everything better.",
    "Sometimes, all I need is to hear from you.",
    "You make my life brighter and my heart lighter.",
    "No matter how much time we spend, it's never enough.",
    "You are the best thing that has ever happened to me.",
    "Every conversation with you feels like home.",
    "I feel so lucky to have you in my life.",
    "Imagining hugging you makes my heart race.",
    "I love the way you make me laugh.",
    "You are the person I always dreamed of."
];

let currentNoteIndex = 0;

jarImage.addEventListener('click', () => {
    if (stickyNote.classList.contains('visible')) {
        stickyNote.classList.remove('visible');
        setTimeout(() => {
            showNextNote();
        }, 500); // Delay to allow fade-out
    } else {
        showNextNote();
    }
});

function showNextNote() {
    noteContent.textContent = loveNotes[currentNoteIndex];
    stickyNote.classList.add('visible');
    currentNoteIndex = (currentNoteIndex + 1) % loveNotes.length;
}