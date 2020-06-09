<script>
    import {getContext} from "svelte"

    import Title from "./shared/Title.svelte"

    const data = getContext("data")

    const {services} = data
</script>


<section class="py-12 px-4">
    <Title title={services.title}/>
    <p class="text-center mb-12 text-gray-500">{services.subtitle}</p>
    <div>
        {#each services.content as service, index}
            <div class="flex flex-wrap items-center -mx-8">
                <div class="md:w-1/2 px-8 mb-8 {index % 2 === 0 ?
                `md:order-1` : `order-none`} ">
                    <img class="w-4/5 mx-auto" src={service.image} alt="">
                </div>
                <div class="md:w-1/2 px-8 mb-8 {index % 2 === 0 ?
                `md:text-right` : ``}">
                    <span class="text-5xl">{service.title}</span>
                    <h3 class="text-2xl mb-3 font-heading">{service.subtitle}</h3>
                    <p class="text-gray-500 leading-relaxed">{service.text}</p>
                </div>
            </div>
        {/each}
    </div>
</section>