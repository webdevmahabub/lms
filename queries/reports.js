import { replaceMongoIdInObject } from "@/lib/convertData";
import { Assessment } from "@/model/assessment-model";
import { Report } from "@/model/report-model";

export async function getReport(filter) {
    console.log("Filter used:", filter); // Already added
    try {
        const report = await Report.findOne(filter)
            .populate({
                path: "quizAssessment",
                model: Assessment,
            })
            .lean();

        if (!report) {
            console.log("No report found for filter:", filter);
            return null; // Graceful handling
        }

        return replaceMongoIdInObject(report);
    } catch (error) {
        console.error("Error in getReport:", error);
        throw new Error(error.message || "Failed to fetch report");
    }
}