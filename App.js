import React from "react";


    <form onSubmit={e => handleSubmit(e)}>
        <div><h1>Search for a Movie Title</h1></div>
        <img src="/img/005-shopping-basket.png" alt="Shopping List Basket" />
        <div>

        <input
            name="name"
            type="text"
            placeholder="ie: movie title"
        />
        </div>
        <Button
            node="button"
            type="submit"
            waves="light"
        >
            Submit
                    <Icon right>
                send
                    </Icon>
        </Button>
    </form>

export default App;