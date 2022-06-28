<span class="caret"></span>

<style>
    .caret {
        height: 1.25em;
        margin-top: 0.0625em;
        display: inline-block;
        border-right: .75em solid;
        animation:
            blink-caret 1.25s step-end infinite;
        }

    :global(.dark-mode .caret) {
        animation:
            blink-caret-dark 1.25s step-end infinite;
    }

    @keyframes blink-caret {
        from, to { border-color: transparent }
        50% { border-color: var(--caret-color); }
    }

    @keyframes blink-caret-dark {
        from, to { border-color: transparent }
        50% { border-color: var(--caret-color-dark); }
    }

</style>