<script>
    import {getContext} from "svelte"

    const data = getContext("data")
</script>

<section class="py-8 px-4">
    <div class="flex flex-wrap -mx-3">
        <div class="md:w-1/4 px-3 mb-6 md:mb-0">
            <h3 class="text-xl mb-1 md:mb-3 font-heading">Great quality</h3>
            <p class="text-gray-500 leading-relaxed">Our paper is literally
                tempting you to print something.</p>
        </div>
        <div class="md:w-1/4 px-3 mb-6 md:mb-0">
            <h3 class="text-xl mb-1 md:mb-3 font-heading">Fast delivery</h3>
            <p class="text-gray-500 leading-relaxed">Business in need? We can
                prepare next-day delivery if necessary.</p>
        </div>
        <div class="md:w-1/4 px-3 mb-6 md:mb-0">
            <h3 class="text-xl mb-1 md:mb-3 font-heading">Attractive
                discounts</h3>
            <p class="text-gray-500 leading-relaxed">Every customer gets 10%
                discount on the other paper supplies.</p>
        </div>
        <div class="md:w-1/4 px-3 mb-6 md:mb-0">
            <h3 class="text-xl mb-1 md:mb-3 font-heading">Help at any time</h3>
            <p class="text-gray-500 leading-relaxed">Our consultants are ready
                to serve at any hour.</p>
        </div>
    </div>
</section>