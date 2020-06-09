<script>
  import { getContext } from "svelte";

  const data = getContext("data");
</script>

<section class="py-12 px-4 text-center">
  <div class="w-full max-w-2xl mx-auto">
    <span class="text-sm font-semibold">{data.banner.tagline}</span>
    <h2 class="text-5xl mt-2 mb-6 leading-tight font-heading uppercase">
      {data.banner.title}
    </h2>
    <p class="mb-8 text-gray-500 leading-relaxed">{data.banner.subtitle}</p>
    <div>
      <a
        class="inline-block py-4 px-8 mr-6 leading-none text-white bg-indigo-500
        hover:bg-indigo-600 rounded shadow"
        href="{data.banner.ctaLeft.link}"
      >
        {data.banner.ctaLeft.name}
      </a>
      <a
        class="text-blue-700 hover:underline"
        href="{data.banner.ctaRight.link}"
      >
        {data.banner.ctaRight.name}
      </a>
    </div>
  </div>
</section>
