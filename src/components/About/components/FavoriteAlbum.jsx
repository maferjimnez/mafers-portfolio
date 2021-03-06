import React from 'react';
import TabsContainer from '../../../styles/TabsContainer';
import AlbumContainer from './FavoriteAlbumStyles';

const FavoriteAlbum = () => {
	return (
		<TabsContainer className="favorite-album-container">
			<div className="tab-container">
				<div className="tab-dots"></div>
				<div className="tab-dots"></div>
				<div className="tab-dots"></div>
			</div>
			<AlbumContainer>
				<h3>Favorite album atm</h3>
				<iframe
					title="Red, Taylor's version"
					src="https://open.spotify.com/embed/album/6kZ42qRrzov54LcAk4onW9?utm_source=generator"
					width="100%"
					frameBorder="0"
					allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"></iframe>
			</AlbumContainer>
		</TabsContainer>
	);
};

export default FavoriteAlbum;
