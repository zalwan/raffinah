<script>
</script>

<section class=" bg-center bg-cover bg-no-repeat ornament py-7 w-screen text-white">
	<div class=" flex flex-col gap-y-4">
		<h1 class="text-center text-4xl font-bold font-sedan pb-5">Save The Date</h1>
		<div class=" border-gray-400 p-8 border-4 mx-8 text-center shadow-lg shadow-white">
			<h1 class=" text-3xl font-bold leading-relaxed pb-4 font-coget underline underline-offset-4">
				Akad Nikah
			</h1>
			<p>Sabtu, 04 Mei 2024</p>
			<p>09.00 WIB - Selesai</p>
			<p>Kp. Gadog RT 008 / RW 003 Ds. Klutuk Kec. Mekar Baru Kab. Tangerang</p>
		</div>

		<div class=" border-gray-400 p-8 border-4 mx-8 text-center shadow-lg shadow-white mt-8">
			<h1 class=" text-3xl font-bold leading-relaxed pb-4 font-coget underline underline-offset-4">
				Resepsi
			</h1>
			<p>Sabtu, 04 Mei 2024</p>
			<p>10.00 WIB - Selesai</p>
			<p>Kp. Gadog RT 008 / RW 003 Ds. Klutuk Kec. Mekar Baru Kab. Tangerang</p>
		</div>
	</div>
</section>

<style>
	.ornament {
		position: relative;
	}

	.ornament::before {
		content: '';
		position: absolute;
		top: 0;
		left: 0;
		width: 100%;
		height: 100%;
		background-image: url($lib/images/ornament.jpeg);
		background-repeat: no-repeat;
		/* background-position: center; */
		transform: scaleX(-1);
	}
	.ornament > div {
		position: relative;
		z-index: 1;
	}
</style>
