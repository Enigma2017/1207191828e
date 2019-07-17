eventListeners();

function eventListeners(){

	document.querySelector( '#comments__form' ).addEventListener( 'submit', newComment );
}

function newComment( e ){
	e.preventDefault();

	const readInput = document.getElementById( 'comments__textarea' ).value;

	let readUsername = document.getElementById( 'comments__username' ).value;

	let userUnknown = 'Anonymous';

	if( readUsername == null || readUsername == '' ){
		readUsername = userUnknown;
	}

	const date = new Date( 2019, 6, 17 );

	const option = {
		year: 'numeric',
		month: 'long',
		day: 'numeric'
	}

	const dateComment = date.toLocaleString( "ru", option );

	const userComments = document.getElementById( 'user__comments' );

	const div = document.createElement( 'div' );
	div.classList = 'user__comments_block';

	const div1 = document.createElement( 'div' );
	div1.classList = 'flex';

	const div2 = document.createElement( 'div' );
	div2.classList = 'user__comments_text';
	div2.textContent = readInput;

	const p1 = document.createElement( 'p' );
	p1.classList = 'user__comments_name';
	p1.textContent = readUsername;

	const p2 = document.createElement( 'p' );
	p2.classList = 'user__comments_date';
	p2.textContent = dateComment;

	userComments.appendChild( div1 );
	div1.appendChild( p1 );
	div1.appendChild( p2 );

	userComments.appendChild( div2 );

	div.appendChild( div1 );
	div.appendChild( div2 );

	userComments.appendChild( div );
}
