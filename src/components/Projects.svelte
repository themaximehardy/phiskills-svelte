<script>
    import {getContext} from "svelte"

    import Title from "./shared/Title.svelte"

    const data = getContext("data")

    const projects = {
        title: "random title",
        content: [{
            logo: "placeholders/logos/realweb.svg",
            image: "placeholders/pictures/office.jpg",
            text: "blablabla",
            name: "dada",
            link: "#"
        }]
    }

</script>

<section class="py-8 px-4">
    <Title title={projects.title}/>
    <div class="flex flex-wrap -mx-4">
        {#each projects.content as project}
            <div class="w-full lg:w-1/3 px-4 mb-8">
                <div class="flex flex-col h-full p-8 pb-6 rounded shadow-md">
                    <img class="w-1/3 mb-4" src={project.logo}
                         alt="">
                    <img src={project.image} alt=""
                         class="rounded shadow-md mb-2 md:mb-3">
                    <p class="mb-4">{project.text}</p>
                    <p class="text-sm mb-12 text-gray-500">{project.name}</p>
                    <a class="mt-auto text-blue-700 hover:underline"
                       href={project.link}>Read
                        the case study »</a>
                </div>
            </div>
        {/each}
    </div>
</section>
