package com.example.exam.model;

import jakarta.validation.constraints.NotBlank;
import jakarta.validation.constraints.NotNull;
import java.time.Instant;
import java.util.List;

public record ProctorReview(
    @NotBlank String candidateId,
    @NotBlank String reviewer,
    @NotNull Instant reviewedAt,
    List<String> evidenceIds,
    @NotBlank String recommendation,
    String notes
) {}
