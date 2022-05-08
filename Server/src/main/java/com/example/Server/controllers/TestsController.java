package com.example.Server.controllers;

import com.example.Server.models.Notes;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;

import java.io.File;
import java.io.IOException;
import java.util.List;
import java.util.UUID;

@CrossOrigin(origins = "http://localhost:3000/")
@RestController
@RequestMapping("api")
public class TestsController {
    public String str;

    @Value("${upload.path}")
    private String uploadPath;

    @GetMapping("/getIm")
    public String getIm() {
        return str;
    }

    @PostMapping("/CreateImage")
    public String CreateImage(
            @RequestParam("file") MultipartFile image
    ) throws IOException {

        String resultFileName = null;
        if (image != null && !image.getOriginalFilename().isEmpty()) {
            File uploadDir = new File(uploadPath);
            if (!uploadDir.exists()) {
                uploadDir.mkdir();
            }
            String uuidFile = UUID.randomUUID().toString();
            resultFileName= uuidFile + image.getOriginalFilename();
            image.transferTo((new File("C:\\study\\Notes\\Client\\public\\assets\\images\\" + resultFileName)));

        }
        return ("assets/images/"+resultFileName);
    }
}
