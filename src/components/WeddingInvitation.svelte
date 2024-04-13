<script>
	// import hero from '$lib/images/hero.jpeg';
	// import { flip } from 'svelte/animate';
</script>

<section class="flex flex-col h-screen w-screen bg-center bg-cover bg-no-repeat hero">
	<div class=" flex flex-col items-center justify-start pt-12 text-center h-full pb-10 text-white">
		<h3 class=" text-xl capitalize italic font-tangerine">the wedding of</h3>
		<div class=" flex justify-center text-6xl items-center gap-x-5 pb-4">
			<p class="py-4 text-3xl font-bold">Raffi</p>
			&
			<p class="py-4 text-3xl font-bold">Inah</p>
		</div>
		<span>04 mei 2024</span>
	</div>
</section>

<style>
	.hero {
		background-image: linear-gradient(to bottom, #000000 0%, #ffffff80 100%),
			url($lib/images/hero.jpeg);
	}
</style>
