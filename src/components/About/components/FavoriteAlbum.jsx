import React from 'react';
import TabsContainer from '../../../styles/TabsContainer';
import AlbumContainer from './FavoriteAlbumStyles';

function FavoriteAlbum() {
	return (
		<TabsContainer>
			<div className="tab-container">
				<div className="tab-dots"></div>
				<div className="tab-dots"></div>
				<div className="tab-dots"></div>
			</div>
			<AlbumContainer>
				<h3>Favorite album atm</h3>
				<iframe
					src="https://open.spotify.com/embed/album/6SPUtbeCQiPGej0t5RBasE"
					width="100%"
					frameBorder="0"
					allowtransparency="true"
					allow="encrypted-media"></iframe>
			</AlbumContainer>
		</TabsContainer>
	);
}

export default FavoriteAlbum;
