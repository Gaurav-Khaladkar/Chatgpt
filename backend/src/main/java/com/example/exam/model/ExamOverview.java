package com.example.exam.model;

import java.util.List;

public record ExamOverview(
    int activeSessions,
    int integrityAlerts,
    int averageCompletionRate,
    int queuedReviews,
    List<String> guidance
) {}
