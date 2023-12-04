import {
    Card,
    CardActions,
    CardContent,
    CardHeader,
    FormControl,
    InputLabel,
    MenuItem,
    Select,
} from "@mui/material";
import { useCenterTypeStore } from "../../store/store";

const ListFilter = () => {
    const { centerType, setCenterType } = useCenterTypeStore();
    return (
        <Card elevation={6} sx={{ marginBottom: 3 }}>
            <CardHeader title="Filter" />
            <CardContent>
                <CardActions>
                    <FormControl fullWidth>
                        <InputLabel id="center-type">Center Type</InputLabel>
                        <Select
                            id="center-type"
                            label="Center Type"
                            value={centerType}
                            onChange={(e) => setCenterType(e.target.value)}
                        >
                            <MenuItem value="">None</MenuItem>
                            <MenuItem value="지역">지역</MenuItem>
                            <MenuItem value="중앙/권역">중앙/권역</MenuItem>
                        </Select>
                    </FormControl>
                </CardActions>
            </CardContent>
        </Card>
    );
};

export default ListFilter;
