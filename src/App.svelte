<script>
  import { setContext } from "svelte";

  import Video from "./components/shared/Video.svelte";
  import Nav from "./components/Nav.svelte";
  import Banner from "./components/Banner.svelte";
  import Articles from "./components/Articles.svelte";
  import Technology from "./components/Technology.svelte";
  import Values from "./components/Values.svelte";
  import Team from "./components/Team.svelte";
  import Projects from "./components/Projects.svelte";
  import Services from "./components/Services.svelte";
  import Contact from "./components/Contact.svelte";
  import Footer from "./components/Footer.svelte";
  import Features from "./components/Features.svelte";

  export let data = {};
  setContext("data", data);

  let innerHeight = 0;
</script>

<main>
  <Video>
    <Nav />
    <Banner />
  </Video>
  <div class="container mx-auto">
    <Features />
    <Services />
    <Projects />
    <Articles />
    <Technology />
    <Values />
    <Team />
    <Contact />
    <Footer />
  </div>
</main>

<style>
    * {
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
    }
</style>