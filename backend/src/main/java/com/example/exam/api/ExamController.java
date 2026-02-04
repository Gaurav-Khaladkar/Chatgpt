package com.example.exam.api;

import com.example.exam.model.ExamOverview;
import com.example.exam.model.IntegritySignal;
import com.example.exam.model.ProctorReview;
import jakarta.validation.Valid;
import java.time.Instant;
import java.util.List;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseStatus;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/api/exams")
public class ExamController {

    @GetMapping("/overview")
    public ExamOverview getOverview() {
        return new ExamOverview(
            128,
            7,
            82,
            19,
            List.of(
                "Integrity alerts are advisory only.",
                "Human reviewers must confirm before any adverse action.",
                "Evidence is stored securely and deleted on schedule."
            )
        );
    }

    @GetMapping("/signals")
    public List<IntegritySignal> getSignals() {
        return List.of(
            new IntegritySignal("Rapid guessing", "medium", Instant.now()),
            new IntegritySignal("Window focus loss", "low", Instant.now()),
            new IntegritySignal("Unusual answer edits", "high", Instant.now())
        );
    }

    @PostMapping("/reviews")
    @ResponseStatus(HttpStatus.CREATED)
    public ProctorReview submitReview(@Valid @RequestBody ProctorReview review) {
        return review;
    }
}
