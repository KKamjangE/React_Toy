import { useSearchStateStore } from "@/store/store";
import {
    Card,
    CardActions,
    CardHeader,
    FormControl,
    InputLabel,
    MenuItem,
    Select,
} from "@mui/material";

const SearchForm = () => {
    const { perPage, setPerPage, setPage } = useSearchStateStore((state) => ({
        perPage: state.perPage,
        setPage: state.setPage,
        setPerPage: state.setPerPage,
    }));

    return (
        <Card
            elevation={6}
            sx={{
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
                marginBottom: 3,
            }}
        >
            <CardHeader title="코로나 예방접종센터 검색 결과" />
            <CardActions sx={{ flexGrow: 0.2 }}>
                <FormControl fullWidth>
                    <InputLabel id="perPage">perPage</InputLabel>
                    <Select
                        id="perPage"
                        label="perPage"
                        value={perPage}
                        onChange={(e) => {
                            setPerPage(e.target.value);
                            setPage(1);
                        }}
                    >
                        <MenuItem value={10}>10</MenuItem>
                        <MenuItem value={50}>50</MenuItem>
                        <MenuItem value={100}>100</MenuItem>
                    </Select>
                </FormControl>
            </CardActions>
        </Card>
    );
};

export default SearchForm;
