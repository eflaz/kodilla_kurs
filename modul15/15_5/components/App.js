App = React.createClass({
  render: function() {
    const styles = {
      margin: "0 auto",
      textAlign: "center",
      width: "90%"
    };

    return (
      <div style={styles}>
        <h1>Wyszukiwarka GIFów!</h1>
        <p>
          Znajdź gifa na <a href="http://giphy.com">giphy</a>. Naciskaj enter,
          aby pobrać kolejne gify.
        </p>
        <Search onSearch={this.handleSearch} />
        <Gif
          loading={this.state.loading}
          url={this.state.gif.url}
          sourceUrl={this.state.gif.sourceUrl}
        />
      </div>
    );
  },

  getInitialState() {
    return {
      loading: false,
      searchingText: "",
      gif: {}
    };
  },

  handleSearch: function(searchingText) {
    this.setState({
      loading: true
    });
    this.getGif(searchingText)
      .then(response =>
        this.setState({
          loading: false,
          gif: response,
          searchingText: searchingText
        })
      )
      .catch(error => console.error("Ups! Coś poszło źle!", error));
  },

  getGif: function(searchingText) {
    return new Promise(function(resolve, reject) {
      const GIPHY_API_URL = "https://api.giphy.com";
      const GIPHY_PUB_KEY = "BjBvux92uOOayuN1CcXB7PZtJ8cNUPrN";
      const url =
        GIPHY_API_URL +
        "/v1/gifs/random?api_key=" +
        GIPHY_PUB_KEY +
        "&tag=" +
        searchingText; // 2.
      const xhr = new XMLHttpRequest(); // 3.
      xhr.open("GET", url);
      xhr.onload = function() {
        if (xhr.status === 200) {
          const data = JSON.parse(xhr.responseText).data; // 4.
          const gif = {
            url: data.fixed_width_downsampled_url,
            sourceUrl: data.url
          };
          resolve(gif); // 6.
        } else {
          reject(new Error(this.statusText));
        }
      };
      xhr.onerror = function() {
        reject(new Error(this.statusText));
      };
      xhr.send();
    });
  }
});
