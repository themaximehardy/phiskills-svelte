<script>
  import { getContext } from "svelte"

  const data = getContext("data")
  const {footer, navLinks} = data
  const year = new Date().getFullYear()
</script>

<footer>
  <div class="flex flex-wrap items-center py-4 px-4 border-b">
    <div class="w-full lg:w-1/5 text-center lg:text-left">
      <a class="text-xl text-indigo-500 font-semibold" href="/">
        {data.general.name}
      </a>
    </div>
    <div class="w-full lg:w-3/5 mt-4 lg:mt-0 text-center">
      {#each navLinks as link}
        {#if link.inFooter}
            <a
                class="inline-block mx-4 mb-4 lg:mb-0 text-blue-900 hover:text-blue-700"
                href="#{link.slug}"
            >
            {link.name}
            </a>
        {/if}
      {/each}
    </div>
    <div
      class="flex justify-center lg:justify-end w-full lg:w-1/5 my-2 lg:my-0"
    >
      <img class="w-6 h-6" src="placeholders/icons/message.svg" alt="" />
      <img class="w-6 h-6 mx-8" src="placeholders/icons/share.svg" alt="" />
      <img class="w-6 h-6" src="placeholders/icons/star.svg" alt="" />
    </div>
  </div>
  <div class="py-4 text-center">
    <span class="block md:inline-block mb-4 md:mb-0 mx-3">
      © {year} {data.general.name}
    </span>
    <a class="inline-block mx-4 text-blue-900 hover:text-blue-700" href="{footer.privacyLink}">
      Privacy Policy
    </a>
    <a class="inline-block mx-4 text-blue-900 hover:text-blue-700" href="{footer.termOfService}">
      Term of Service
    </a>
  </div>
</footer>
