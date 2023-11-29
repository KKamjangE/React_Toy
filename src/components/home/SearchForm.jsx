import { useQueryClient } from "@tanstack/react-query";
import { useSearchStateStore } from "../../store/store";
import { queryKeys } from "../../contents/queryKeys";
import {
    Button,
    Card,
    CardActions,
    CardContent,
    CardHeader,
    TextField,
} from "@mui/material";

const SearchForm = () => {
    const { page, perPage, setPage, setPerPage } = useSearchStateStore();
    const queryClient = useQueryClient();

    const handleSearch = () => {
        queryClient.fetchQuery({ queryKey: [queryKeys.getSearchCenters] });
    };

    const handleEnter = (e) => {
        if (e.key === "Enter") {
            handleSearch();
        }
    };

    return (
        <Card elevation={6}>
            <CardHeader title="코로나 예방접종센터 검색" />
            <CardContent
                sx={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    gap: 5,
                }}
            >
                <TextField
                    id="page"
                    label="page"
                    defaultValue={page}
                    onChange={(e) => {
                        setPage(e.target.value);
                    }}
                    onKeyDown={handleEnter}
                    size="small"
                    autoComplete="off"
                />
                <TextField
                    id="perPage"
                    label="perPage"
                    defaultValue={perPage}
                    onChange={(e) => setPerPage(e.target.value)}
                    onKeyDown={handleEnter}
                    size="small"
                    autoComplete="off"
                />
                <CardActions>
                    <Button variant="contained" onClick={handleSearch}>
                        검색
                    </Button>
                </CardActions>
            </CardContent>
        </Card>
    );
};

export default SearchForm;
