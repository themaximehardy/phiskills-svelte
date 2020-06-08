<script>
    import {setContext} from "svelte"

    import Articles from "./components/Articles.svelte"
    import Technology from "./components/Technology.svelte"
    import Values from "./components/Values.svelte"
    import Team from "./components/Team.svelte"
    import Projects from "./components/Projects.svelte"
    import Services from "./components/Services.svelte"
    import Contact from "./components/Contact.svelte"
    import Footer from "./components/Footer.svelte"

    export let data = {}
    setContext("data", data)
</script>

<main>
    <div class="container mx-auto px-4">
        <Nav/>
        <section class="py-12 px-4 text-center">
            <div class="w-full max-w-2xl mx-auto"><span
                    class="text-sm font-semibold">TAGLINE</span>
                <h2 class="text-5xl mt-2 mb-6 leading-tight font-heading">END TO
                    END SOFTWARE DEVELOPMENT FOR ENDLESS GROWTH</h2>
                <p class="mb-8 text-gray-500 leading-relaxed">We craft software
                    that is scalable, secure and flexible.</p>
                <div>
                    <a class="inline-block py-4 px-8 mr-6 leading-none text-white bg-indigo-500 hover:bg-indigo-600 rounded shadow"
                       href="#">Contact Us</a><a
                        class="text-blue-700 hover:underline" href="#">Learn
                    more</a></div>
            </div>
        </section>

        <Services/>
        <Projects/>
        <Articles/>
        <Technology/>
        <Values/>
        <Team/>
        <Contact/>
        <Footer/>

    </div>
</main>