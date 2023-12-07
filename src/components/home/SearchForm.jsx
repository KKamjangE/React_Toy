import { useSearchStateStore } from "@/store/store";
import { Card, CardContent, CardHeader, TextField } from "@mui/material";

const SearchForm = () => {
    const { page, perPage, setPage, setPerPage } = useSearchStateStore();

    return (
        <Card elevation={6} sx={{ marginBottom: 3 }}>
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
                    size="small"
                    autoComplete="off"
                />
                <TextField
                    id="perPage"
                    label="perPage"
                    defaultValue={perPage}
                    onChange={(e) => setPerPage(e.target.value)}
                    size="small"
                    autoComplete="off"
                />
            </CardContent>
        </Card>
    );
};

export default SearchForm;
