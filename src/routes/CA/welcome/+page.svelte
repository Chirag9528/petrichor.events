<script lang="ts">
	import Globe from '$lib/assets/svgs/globe.svg';

	function open_caProfile(){

	
	}

	function generateCACode(){
		// first check in stores. 
		// If not present then 
		// fetch go to generate it.
	}

</script>	

<main>
	<div class="first-block">
		<div class="content">

			<div class="title"><p>CA Petrichor</p></div>
			<div class="content_box">

				<div class="caption">
					<b>Become a Campus Ambassador for Petrichor</b><br/>
                    Be the voice of IITPKD's premier fest and lead your campus in celebrating the spirit of Petrichor.
				</div>
				<div class="buton_area">
						<button type="button" class="ca_portal">CA Profile 
							<svg width="20px" height="20px" viewBox="0 2.5 19 19" fill="none" xmlns="http://www.w3.org/2000/svg">
								<path d="M10 7L15 12L10 17" stroke="gray" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
							</svg>
						</button>
						<button type="button" class="discover" >Apply CA 
							<svg width="20px" height="20px" viewBox="0 2.5 19 19" fill="none" xmlns="http://www.w3.org/2000/svg">
								<path d="M10 7L15 12L10 17" stroke="gray" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
							</svg>

						</button>
				</div>
			</div>
		</div>  
		<div class="infos">

			<div class="content_box1">
				<p>30k Prize Pool</p>
				<p>Earn more for each registration/participation you bring</p>
			</div>
			<div class="marketingbs">
				<div class="card">
					<h2>Benefits</h2>
					<li>Win cash prizes from a pool of 30k if you are in the top 5 CAs </li>
					<li>Earn ₹ 50 per extra registration above 5 (for workshops and tech summit)</li>
					<li>Win exciting goodies and pro-show tickets of Petrichor'24</li>
					<li>Earn certificate of merit issued by Petrichor, IIT Palakkad for your valiant efforts</li>
				</div>
				<div class="card neg">
					<h2>All You Have to do</h2>
					<li>Share our content, posters and links to your peers and college groups</li>
					<li>Encourage students from your college and contacts to participate in our events and workshops</li>
				</div>
			</div>
		</div>
	</div>
	

	<div class="strip">
		<div class="strip1">
			<!-- svelte-ignore a11y-missing-attribute -->
			<div class="banner"><img src={Globe} style="filter: invert();width: 20px;" /></div>
			<div class="banner">&nbsp;PETRICHOR</div>
		</div>
		<div class="strip1">
			<!-- svelte-ignore a11y-missing-attribute -->
			<div class="banner"><img src={Globe} style="filter: invert();width: 20px;" /></div>
			<div class="banner">&nbsp;PETRICHOR</div>
		</div>
		<div class="strip1">
			<!-- svelte-ignore a11y-missing-attribute -->
			<div class="banner"><img src={Globe} style="filter: invert();width: 20px;" /></div>
			<div class="banner">&nbsp;PETRICHOR</div>
		</div>
		<div class="strip1">
			<!-- svelte-ignore a11y-missing-attribute -->
			<div class="banner"><img src={Globe} style="filter: invert();width: 20px;" /></div>
			<div class="banner">&nbsp;PETRICHOR</div>
		</div>
		<div class="strip1">
			<!-- svelte-ignore a11y-missing-attribute -->
			<div class="banner"><img src={Globe} style="filter: invert();width: 20px;" /></div>
			<div class="banner">&nbsp;PETRICHOR</div>
		</div>
		<div class="strip1">
			<!-- svelte-ignore a11y-missing-attribute -->
			<div class="banner"><img src={Globe} style="filter: invert();width: 20px;" /></div>
			<div class="banner">&nbsp;PETRICHOR</div>
		</div>
	</div>

</main>

<style>
	main {
		height: 100vh;
		display: flex;
		flex-direction: column;
		background: transparent;
		background-color: transparent;
		/* padding: 5em 0; */
	}
    .first-block{
		width: 100vw;
		flex: 8;
		/* margin-bottom: 5em; */
		display: flex;
		
    }
	.content{
		flex: 1;
		display: flex;
		flex-direction: column;
		justify-content: center;
	}
	button{
		cursor: pointer;
		z-index: 2;
	}
	.title {
		flex: 2;
		padding-left: 4vw;
		display: flex;
		align-items: flex-end;
		color: white;
	}
	.title p {
		font-size: calc(40px + 1.5vw);
		font-weight: 100;
		margin: 0;
	}
	.content_box{
		flex: 3;
		display: flex;
		flex-direction: column;
		justify-content: center;
	}
	.caption {
		font-size: 20px;
		font-weight: 100;
		color: white;
		overflow: hidden;
		text-wrap: wrap;
		padding-left: 4vw;
	}
	.buton_area{
		display: flex;
		justify-content: center;
		align-items: flex-end;
		justify-content: space-evenly;
		margin-top: 5rem;
		margin-right: 10vw;
	}
	button {
		border-radius: 2.5em;
		padding: 0.8em 2em;
		background-color: transparent;
		display: flex;
		align-items: center;
		justify-content: center;
		border: solid gray 1px;
		color: white;
		text-align: center;
		font-weight: 100;
	}

	

	.strip {
		display: flex;
		flex: 2;
		align-items: center;
		overflow-x: hidden;
		width: 100vw;
		max-height: 35px;
		margin: 2rem 0;
		border-top: 2px solid white;
		border-bottom: 2px solid white;
		padding-top: 12px;
		padding-bottom: 12px;
		opacity: 60%;
	}
	.strip1 {
		display: flex;
		justify-content: center;
		min-width: max(20%,150px);

		/* Apply animation to this element */
		-moz-animation: example1 5s linear infinite;
		-webkit-animation: example1 5s linear infinite;
		animation: example1 5s linear infinite;
	}

	.banner {
		display: inline-block;
	}
	.infos{
		flex: 1;
		margin: 15px;
		display: flex;
		align-items: center;
		justify-content: center;
		flex-direction: column;
		border-radius: 1em;
		padding: 0 1vw;
		
		margin-top: 4em;
	}
	.infos p {
		text-align: center;
		margin: 5px;
	}
	/* Move it (define the animation) */
	@-moz-keyframes example1 {
		0% {
			-moz-transform: translateX(0%);
		}
		100% {
			-moz-transform: translateX(-100%);
		}
	}
	@-webkit-keyframes example1 {
		0% {
			-webkit-transform: translateX(0%);
		}
		100% {
			-webkit-transform: translateX(-100%);
		}
	}
	@keyframes example1 {
		0% {
			-moz-transform: translateX(0%); /* Firefox bug fix */
			-webkit-transform: translateX(0%); /* Firefox bug fix */
			transform: translateX(0%);
		}
		100% {
			-moz-transform: translateX(-100%); /* Firefox bug fix */
			-webkit-transform: translateX(-100%); /* Firefox bug fix */
			transform: translateX(-100%);
		}
	}


	@media only screen and (max-width:900px){

		.caption {
			font-size: 11px;
		}
		button{
			padding: 0.5em 1em;
		}
		.buton_area{
			margin-top: 1em;
		}
		.first-block{
			flex: 7;
			flex-direction: column;
		}
		.strip{
			padding: 8px 0;
			margin: 1em 0;
		}
		.infos{
			flex: 1;
			font-size: min(3vw,14px);
			margin-top: 1em;
		}
	}
</style>
