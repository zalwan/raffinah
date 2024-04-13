<script>
	import '../app.css';
	import Modal from '../components/Modal.svelte';
	import ParentInvitation from '../components/ParentInvitation.svelte';
	import WeddingInvitation from '../components/WeddingInvitation.svelte';
	import Date from '../components/Date.svelte';
	import Map from '../components/Map.svelte';
</script>

<svelte:head>
	<title>Raffi & Inah</title>
	<meta name="description" content="Wedding Invitation" />
</svelte:head>

<section class=" flex flex-col min-h-screen justify-start items-center bg-black">
	<!-- Modal start -->
	<Modal />
	<!-- Modal end -->
	<!-- Wedding invitation start -->
	<WeddingInvitation />
	<!-- Wedding invitation end -->
	<!-- Parent start -->
	<ParentInvitation />
	<!-- Parent end -->
	<!-- Date start -->
	<Date />
	<!-- Date end -->
	<!-- Map start -->
	<Map />
	<!-- Map end -->
</section>
