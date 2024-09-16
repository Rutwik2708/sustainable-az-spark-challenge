package com.hackathon.backend.service;

import com.cohere.api.Cohere;
import com.cohere.api.requests.ChatRequest;
import com.cohere.api.types.NonStreamedChatResponse;
import org.springframework.stereotype.Service;

@Service
public class CohereService {

    // Step 1: Create a private static instance of the Cohere object
    private static Cohere cohereInstance;

    // Step 2: Make the constructor private to prevent instantiation from outside
    private CohereService() {
    }

    // Step 3: Provide a public static method to get the single instance of Cohere
    public static Cohere getCohereInstance() {


        if (cohereInstance == null) {
            synchronized (CohereService.class) {
                if (cohereInstance == null) { // Double-checked locking
                    cohereInstance = Cohere.builder().token("nWKYtuMyHyzyJEvHbloH0mk0amm7l2YJpnVqgQBX").build();
                }
            }
        }
        return cohereInstance;
    }

    public static String[] getResponse(String textToClassify) {
        try {
            String message = "I want you to classify the below text into one of the 10 categories. " +
                    "Water Pollution " +
                    "Air Pollution " +
                    "Soil Degradation " +
                    "Habitat Destruction " +
                    "Noise Pollution " +
                    "Groundwater Depletion " +
                    "Dust Pollution " +
                    "Heavy Metal Contamination " +
                    "Toxic Waste Spills " +
                    "Ecosystem Disruption " +
                    "\n\n" +
                    "\"" + textToClassify + "\" " +
                    "\n\n" +
                    "Give me only the name of the category and also severity (Low,High,Medium) separted by a semicolon";

//        String response = "Dust Pollution;Medium";


//        System.out.println(response);
            // Step 4: Use the singleton instance to make the request
            Cohere cohere = CohereService.getCohereInstance();
            NonStreamedChatResponse response = cohere.chat(
                    ChatRequest.builder()
                            .message(message).build());

            String[] parts = response.getText().split(";");

            parts[0] = parts[0].strip();  // "Dust Pollution"
            parts[1] = parts[1].strip();  // "Medium"

            System.out.println(response);
            return parts;
        } catch (Exception e) {

            System.out.println("Cohere error");
            throw e;
        }
//        return new String[]{"Air Pollution", "Low"};
    }
}
