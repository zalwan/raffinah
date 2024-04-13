<script>
	let isModalOpen = true;
</script>

<section class=" ">
	<div class="modal" class:modal-open={isModalOpen}>
		<div class="modal-box bg-transparent text-center text-white">
			<h3 class=" text-xl capitalize">the wedding of</h3>
			<div class=" flex justify-center text-6xl items-center gap-x-5">
				<p class="py-4 text-3xl">Rafiudin <br /><span class=" text-xl"> ( Raffi ) </span></p>
				&
				<p class="py-4 text-3xl">Jumainah <br /><span class=" text-xl"> ( Inah ) </span></p>
			</div>
			<div class="modal-action justify-center items-center">
				<button class="btn btn-accent" on:click={() => (isModalOpen = false)}>Buka Undangan</button>
			</div>
		</div>
	</div>
</section>

<style>
	.modal:not(dialog:not(.modal-open)),
	.modal::backdrop {
		background-image: url('https://vasiota.com/wp-content/uploads/2022/11/download-8.jpeg');
		background-color: #fff;
		background-repeat: no-repeat;
		background-position: center;
		background-size: cover;
		animation: modal-pop 0.2s ease-out;
	}
</style>
