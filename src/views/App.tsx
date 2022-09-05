import React, { useEffect, useState } from "react";
import Box from "@mui/material/Box";
import Stack from "@mui/material/Stack";
import Container from "@mui/material/Container";
import Table from "../components/Table";
import Chart from "../components/Chart";
import Sidebar from "../components/Sidebar";
import Selectbar from "../components/Selectbar";
import Typography from "@mui/material/Typography";
import CircularProgress from "@mui/material/CircularProgress";
import { Row, Favorite, Query } from "../utils/types";

function App() {
  const [mortalityRates, setMortalityRates] = useState<Row[]>([]);
  const [favorites, setFavorites] = useState<Favorite[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [query, setQuery] = useState<Query>({
    year: "2014",
    tag: "all_cause",
  });

  const handleQuery = (value: Query) => {
    setQuery((prev) => ({ ...prev, ...value }));
  };

  const handleAddFavorite = (favorite: Favorite) => {
    setFavorites((prev) => [favorite, ...prev]);
  };

  const handleDeleteFavorite = (favorite: Favorite) => {
    const filter = favorites.filter(
      (element: Favorite) => favorite.id !== element.id
    );
    setFavorites(filter);
    if (filter.length < 1)
      setQuery({
        year: "2014",
        tag: "all_cause",
      });
  };

  const getMortalityRates = () => {
    setIsLoading(true);
    fetch(
      `${process.env.REACT_APP_API_URL}/mortality/getBy?tag=${query.tag}&year=${query.year}`
    )
      .then((res) => res.json())
      .then((data) => {
        setMortalityRates(data.results);
        setIsLoading(false);
      })
      .catch((error) => console.log(error));
  };

  useEffect(() => {
    getMortalityRates();
  }, [query]);

  if (isLoading) {
    return (
      <Box sx={{ display: "flex" }}>
        <CircularProgress />
      </Box>
    );
  }

  return (
    <Container maxWidth="lg">
      <Box>
        <Typography variant="h1">Cause of Deaths in the US</Typography>
      </Box>
      <Stack marginBottom={10} direction="row" spacing={2}>
        <Box>
          <Sidebar
            handleAddFavorite={handleAddFavorite}
            handleDeleteFavorite={handleDeleteFavorite}
            favoritesList={favorites}
          />
        </Box>
        <Stack direction="column" spacing={2} width="100%">
          <Selectbar
            favoritesList={favorites}
            handleQuery={handleQuery}
            query={query}
          />
          <Box>
            {mortalityRates && (
              <Table
                rows={mortalityRates}
                causeId={query.tag}
                causeLabel={query.tag}
              />
            )}
          </Box>
          <Box>
            {mortalityRates && <Chart data={mortalityRates} tag={query.tag} />}
          </Box>
        </Stack>
      </Stack>
    </Container>
  );
}

export default App;
