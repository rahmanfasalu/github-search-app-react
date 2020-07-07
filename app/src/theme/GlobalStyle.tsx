import { createGlobalStyle } from "styled-components";
import Theme from "./theme";
import { Media } from "./media";

const GlobalStyle = createGlobalStyle`
	@font-face {
		font-family: 'Open Sans';
		src: local('OpenSans'), url;(./assets/fonts/open-sans-v17-latin-regular.woff2) format('truetype');
	}

	::selection {
		color: ${Theme.colors.primary};
		background: ${Theme.colors.bg};
	}
    html {
		height: 100%;
	  }
	  body,#root {
		min-height: 100%;
	  }
	  
	body {
		margin:0;
		font-family: 'Open Sans';
		background: ${Theme.colors.bg};
		color: ${Theme.colors.primary};
		@media ${Media.phone} {
		
		}
	}

	a {
		color: ${Theme.colors.secondary};
		text-decoration: none;
		transition: all ${Theme.transitions.normal};
	}

	a:hover {
		color: ${Theme.colors.primary};
	}

	h1, h2, h3, h4 {
		color: ${Theme.colors.primary};
	}

	blockquote {
		font-style: italic;
		position: relative;
	}

	blockquote:before {
		content: "";
		position: absolute;
		background: ${Theme.colors.primary};
		height: 100%;
		width: 0.6rem;
		margin-left: -1.6rem;
	}

	label {
		margin-bottom: .5rem;
		color: ${Theme.colors.secondary};
	}

	input, textarea {
		border-radius: .5rem;
		border: none;
		background: rgba(0, 0, 0, 0.05);
		padding: .25rem 1rem;

		&:focus {
			outline: none;
		}
	}

	.textRight {
		text-align: right;
	}

	.Abc {
		font-size='35px';
	}
`;

export default GlobalStyle;
