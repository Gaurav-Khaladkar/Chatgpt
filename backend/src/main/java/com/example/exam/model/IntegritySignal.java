package com.example.exam.model;

import java.time.Instant;

public record IntegritySignal(
    String label,
    String severity,
    Instant observedAt
) {}
