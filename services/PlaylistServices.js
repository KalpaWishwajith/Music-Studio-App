import axios from "axios";

export const getPlaylist = async () => {
  try {
    const response = await axios.get(
      "https://itunes.apple.com/search?term=ed+sheeran&entity=song"
    );
    console.log(response.data);
    return response.data;
  } catch (error) {
    console.log(error);
  }
};
