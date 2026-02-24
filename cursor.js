

(function() {

    /* Taille écran  */
    const isMobile = window.innerWidth < 768;
   const W = isMobile ? 35 : 80;
const H = isMobile ? 47 : 75;
    const offsetX = isMobile ? 12 : 20;
    const offsetY = isMobile ? -42 : -70;
    const dotSize = isMobile ? 6 : 8;

    /* CSS injecté */
    const style = document.createElement('style');
    style.textContent = `
        * { cursor: none !important; }

        #cursor-dot {
            position: fixed;
            width: ${dotSize}px;
            height: ${dotSize}px;
            background: #44D62C;
            border-radius: 50%;
            pointer-events: none;
            z-index: 99999;
            transform: translate(-50%, -50%);
            box-shadow: 0 0 8px #44D62C;
        }

        #sakura-cursor {
            position: fixed;
            width: ${W}px;
            height: ${H}px;
            pointer-events: none;
            z-index: 99998;
            left: 0; top: 0;
            transform: translate(${offsetX}px, ${offsetY}px);
            filter: drop-shadow(0 4px 12px rgba(255,150,200,.4));
        }

        .hair-side { transform-origin: top center; animation: hairWave 1.2s ease-in-out infinite; }
        @keyframes hairWave { 0%,100%{transform:rotate(-3deg)} 50%{transform:rotate(3deg)} }
        .hair-side.right { animation-name: hairWaveR; animation-delay: .15s; }
        @keyframes hairWaveR { 0%,100%{transform:rotate(3deg)} 50%{transform:rotate(-3deg)} }

        .body-group { transform-origin: center 30px; animation: bodyBounce .4s ease-in-out infinite alternate; }
        @keyframes bodyBounce { 0%{transform:translateY(0px) rotate(-1deg)} 100%{transform:translateY(-3px) rotate(1deg)} }

        .leg-l { transform-origin: top center; animation: legL .4s ease-in-out infinite alternate; }
        .leg-r { transform-origin: top center; animation: legR .4s ease-in-out infinite alternate; }
        @keyframes legL { 0%{transform:rotate(-20deg)} 100%{transform:rotate(20deg)} }
        @keyframes legR { 0%{transform:rotate(20deg)} 100%{transform:rotate(-20deg)} }

        .arm-l { transform-origin: top center; animation: armL .4s ease-in-out infinite alternate; }
        .arm-r { transform-origin: top center; animation: armR .4s ease-in-out infinite alternate; }
        @keyframes armL { 0%{transform:rotate(30deg)} 100%{transform:rotate(-30deg)} }
        @keyframes armR { 0%{transform:rotate(-30deg)} 100%{transform:rotate(30deg)} }

        .s-eye { animation: blink 4s ease-in-out infinite; }
        @keyframes blink { 0%,90%,100%{transform:scaleY(1)} 95%{transform:scaleY(0.1)} }

        .eye-shine { animation: shine 2s ease-in-out infinite; }
        @keyframes shine { 0%,100%{opacity:.9} 50%{opacity:.4} }
    `;
    document.head.appendChild(style);

    /* SVG */
    const svgHTML = `
    <svg viewBox="0 0 60 80" xmlns="http://www.w3.org/2000/svg" width="${W}" height="${H}">
        <ellipse cx="30" cy="16" rx="16" ry="18" fill="#ff85c0"/>
        <g class="hair-side left">
            <path d="M14 20 Q6 30 8 45 Q10 50 14 48 Q12 38 15 28Z" fill="#ff6aaa"/>
        </g>
        <g class="hair-side right">
            <path d="M46 20 Q54 30 52 45 Q50 50 46 48 Q48 38 45 28Z" fill="#ff6aaa"/>
        </g>
        <g class="body-group">
            <rect x="26" y="30" width="8" height="6" rx="2" fill="#ffe0cc"/>
            <ellipse cx="30" cy="20" rx="13" ry="14" fill="#ffe0cc"/>
            <rect x="17" y="10" width="26" height="6" rx="3" fill="#cc2200"/>
            <rect x="23" y="11" width="14" height="4" rx="1" fill="#aaa"/>
            <text x="30" y="15" font-size="4" text-anchor="middle" fill="#555">✦</text>
            <path d="M17 13 Q20 6 25 8 Q23 12 20 14Z" fill="#ff85c0"/>
            <path d="M43 13 Q40 6 35 8 Q37 12 40 14Z" fill="#ff85c0"/>
            <path d="M28 8 Q30 2 32 8Z" fill="#ff6aaa"/>
            <g class="s-eye" style="transform-origin:24px 21px">
                <ellipse cx="24" cy="21" rx="4" ry="4" fill="#1a7a3a"/>
                <ellipse cx="24" cy="21" rx="2.5" ry="2.5" fill="#0d4d24"/>
                <g class="eye-shine"><circle cx="25.5" cy="19.5" r="1" fill="white"/></g>
            </g>
            <g class="s-eye" style="transform-origin:36px 21px; animation-delay:.1s">
                <ellipse cx="36" cy="21" rx="4" ry="4" fill="#1a7a3a"/>
                <ellipse cx="36" cy="21" rx="2.5" ry="2.5" fill="#0d4d24"/>
                <g class="eye-shine"><circle cx="37.5" cy="19.5" r="1" fill="white"/></g>
            </g>
            <path d="M20 17 Q24 15.5 28 17" stroke="#cc7090" stroke-width="1.2" fill="none" stroke-linecap="round"/>
            <path d="M32 17 Q36 15.5 40 17" stroke="#cc7090" stroke-width="1.2" fill="none" stroke-linecap="round"/>
            <ellipse cx="30" cy="25" rx="1.5" ry="1" fill="#ffb8a0"/>
            <path d="M26 28 Q30 31 34 28" stroke="#cc7090" stroke-width="1.5" fill="none" stroke-linecap="round"/>
            <ellipse cx="20" cy="26" rx="4" ry="2.5" fill="#ffaacc" opacity=".5"/>
            <ellipse cx="40" cy="26" rx="4" ry="2.5" fill="#ffaacc" opacity=".5"/>
            <path d="M18 36 Q18 56 20 62 L26 62 L28 44 L32 44 L34 62 L40 62 Q42 56 42 36 Q38 33 30 33 Q22 33 18 36Z" fill="#cc2200"/>
            <path d="M24 34 Q30 38 36 34 Q34 36 30 37 Q26 36 24 34Z" fill="white" opacity=".5"/>
            <rect x="20" y="54" width="20" height="8" rx="2" fill="#aa1100"/>
            <g class="arm-l" style="transform-origin:20px 38px">
                <path d="M20 38 Q12 44 13 54" stroke="#ffe0cc" stroke-width="5" fill="none" stroke-linecap="round"/>
                <circle cx="13" cy="54" r="4" fill="#336633"/>
            </g>
            <g class="arm-r" style="transform-origin:40px 38px">
                <path d="M40 38 Q48 44 47 54" stroke="#ffe0cc" stroke-width="5" fill="none" stroke-linecap="round"/>
                <circle cx="47" cy="54" r="4" fill="#336633"/>
            </g>
            <g class="leg-l" style="transform-origin:26px 62px">
                <path d="M26 62 Q24 72 23 78" stroke="#ffe0cc" stroke-width="5" fill="none" stroke-linecap="round"/>
                <ellipse cx="22" cy="78" rx="5" ry="3" fill="#222"/>
            </g>
            <g class="leg-r" style="transform-origin:34px 62px">
                <path d="M34 62 Q36 72 37 78" stroke="#ffe0cc" stroke-width="5" fill="none" stroke-linecap="round"/>
                <ellipse cx="38" cy="78" rx="5" ry="3" fill="#222"/>
            </g>
        </g>
    </svg>`;

    /* ── Injection dans le DOM ── */
    const dot = document.createElement('div');
    dot.id = 'cursor-dot';
    document.body.appendChild(dot);

    const sakura = document.createElement('div');
    sakura.id = 'sakura-cursor';
    sakura.innerHTML = svgHTML;
    document.body.appendChild(sakura);

    /* ── Variables de position ── */
    let mouseX = window.innerWidth / 2;
    let mouseY = window.innerHeight / 2;
    let sakuraX = mouseX;
    let sakuraY = mouseY;
    let flipped = false;

    /* ── SOURIS ── */
    document.addEventListener('mousemove', (e) => {
        mouseX = e.clientX;
        mouseY = e.clientY;
        dot.style.left = mouseX + 'px';
        dot.style.top  = mouseY + 'px';
    });

    /* ── TACTILE (mobile) ── */
    document.addEventListener('touchstart', (e) => {
        const touch = e.touches[0];
        mouseX = sakuraX = touch.clientX;
        mouseY = sakuraY = touch.clientY;
        dot.style.left = mouseX + 'px';
        dot.style.top  = mouseY + 'px';
    }, { passive: true });

    document.addEventListener('touchmove', (e) => {
        const touch = e.touches[0];
        mouseX = touch.clientX;
        mouseY = touch.clientY;
        dot.style.left = mouseX + 'px';
        dot.style.top  = mouseY + 'px';
    }, { passive: true });

    /* ── Animation loop ── */
    function animate() {
        const speed = isMobile ? 0.18 : 0.13;
        sakuraX += (mouseX - sakuraX) * speed;
        sakuraY += (mouseY - sakuraY) * speed;

        const dx = mouseX - sakuraX;
        if (Math.abs(dx) > 2) {
            const shouldFlip = dx < 0;
            if (shouldFlip !== flipped) {
                flipped = shouldFlip;
                sakura.style.transform = flipped
                    ? `translate(${-(offsetX + W)}px, ${offsetY}px) scaleX(-1)`
                    : `translate(${offsetX}px, ${offsetY}px) scaleX(1)`;
            }
        }

        sakura.style.left = sakuraX + 'px';
        sakura.style.top  = sakuraY + 'px';

        requestAnimationFrame(animate);
    }

    animate();

    /* ── Resize : adapte si on change orientation ── */
    window.addEventListener('resize', () => {
        const nowMobile = window.innerWidth < 768;
        if (nowMobile !== isMobile) window.location.reload();
    });

})();