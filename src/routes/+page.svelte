<script>
	import '../app.css';
	import Modal from '../components/Modal.svelte';
	import WeddingInvitation from '../components/WeddingInvitation.svelte';
</script>

<svelte:head>
	<title>Raffi & Inah</title>
	<meta name="description" content="Wedding Invitation" />
</svelte:head>

<section class=" flex flex-col min-h-screen justify-start items-center bg-white">
	<!-- Modal start -->
	<Modal />
	<!-- Modal end -->
	<!-- Wedding invitation start -->
	<WeddingInvitation />
	<!-- Wedding invitation end -->
</section>
