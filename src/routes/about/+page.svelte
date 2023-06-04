<script>
    import Nav from "../../components/nav.svelte";
</script>

<svelte:head>
    <title>2TEC | ABOUT US</title>
</svelte:head>

<Nav></Nav>

<div
    class="flex justify-center align-middle flex-col h-screen bg-about-wallpaper bg-no-repeat bg-center bg-cover bg-fixed bg-black font-inter"
>
    <div
        class="flex flex-col justify-items-center h-2/5 justify-center self-center px-10"
    >
        <h2
            class="items-center text-6xl md:text-8xl font-bold tracking-tighter leading-[89.02%] text-slate-100 self-center text-center font-inter duration-700 animate animate-glow"
        >
            Shoot for the <span class="text-yellow-vivid">stars</span>, <br /> aim
            for the moon.
        </h2>
        <p
            class="text-slate-300 text-center text-2xl font-medium my-4
                    tracking-tighter md:text-3xl animate animate-glow"
        >
            Where good ideas take place.
        </p>
    </div>
</div>
<div class="h-screen bg-yellow-vivid">
    <h2>Hola me llamo Paco</h2>
</div>

<style>
    .animate {
        animation-duration: 0.75s;
        animation-delay: 0.5s;
        animation-name: animate-fade;
        animation-timing-function: cubic-bezier(0.26, 0.53, 0.74, 1.48);
        animation-fill-mode: backwards;
    }

    /* Glow In */
    .animate-glow {
        animation-name: animate-glow;
        animation-timing-function: ease;
    }

    @keyframes animate-glow {
        0% {
            opacity: 0;
            filter: brightness(3) saturate(3);
            transform: scale(0.8, 0.8);
        }
        100% {
            opacity: 1;
            filter: brightness(1) saturate(1);
            transform: scale(1, 1);
        }
    }
</style>
