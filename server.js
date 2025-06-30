// server.js
const express = require("express");
const fetch = require("node-fetch");
const cors = require("cors");

const app = express();
const PORT = 3001;

app.use(cors());

app.get("/api/swiggy", async (req, res) => {
  const swiggyUrl =
    "https://www.swiggy.com/dapi/restaurants/list/v5?lat=22.497059223653462&lng=88.32374174147844&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING";

  try {
    const response = await fetch(swiggyUrl, {
      headers: {
        "User-Agent":
          "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 Chrome/90.0.0.0 Safari/537.36",
        Accept: "*/*",
      },
    });

    const data = await response.json();
    res.json(data);
  } catch (err) {
    console.error("Proxy fetch failed:", err.message);
    res.status(500).json({ error: "Failed to fetch from Swiggy" });
  }
});

app.get("/restaurants/:resId", async (req, res) => {
  const { resId } = req.params;
  const menuUrl = `https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=22.497059223653462&lng=88.32374174147844&restaurantId=${resId}&catalog_qa=undefined&submitAction=ENTER`;

  try {
    const response = await fetch(menuUrl, {
      headers: {
        "User-Agent":
          "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 Chrome/90.0.0.0 Safari/537.36",
        Accept: "*/*",
      },
    });

    const data = await response.json();
    res.json(data);
  } catch (err) {
    console.error("Proxy fetch menu failed:", err.message);
    res.status(500).json({ error: "Failed to fetch menu from Swiggy" });
  }
});

app.listen(PORT, () =>
  console.log(`✅ Swiggy proxy running at http://localhost:${PORT}/api/swiggy`)
);
