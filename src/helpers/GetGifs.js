const url = "https://api.giphy.com/v1/gifs";
const api_key = "pDlwIFIZBzt5Qv5oSmeAnNKHKv2vHwjX";

export const GetGifs = async (category) => {
    const response = await fetch(`${url}/search?q=${encodeURI(category)}&limit=14&api_key=${api_key}`);
    const { data } = await response.json();
    const images = data.map(img => {
        return {
            id: img.id,
            title: img.title,
            url: img.images?.original.url,
        }
    });
    return images;
};


