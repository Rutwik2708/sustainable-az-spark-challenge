package com.hackathon.backend.others;

import com.hackathon.backend.entity.Ticket;
import com.hackathon.backend.repository.TicketRepository;
import com.hackathon.backend.util.Utilities;
import org.apache.commons.csv.CSVFormat;
import org.apache.commons.csv.CSVParser;
import org.apache.commons.csv.CSVRecord;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.io.FileReader;
import java.io.IOException;
import java.nio.file.Paths;

@Service
public class CsvDataLoader {

    @Autowired
    private TicketRepository ticketRepository;

    @Autowired
    private Utilities util;

    @Transactional
    public void loadCsvData() throws IOException {
        String filePath = Paths.get("src/main/resources/data.csv").toAbsolutePath().toString();
        try (FileReader reader = new FileReader(filePath);
             CSVParser csvParser = new CSVParser(reader, CSVFormat.DEFAULT.withFirstRecordAsHeader())) {

            for (CSVRecord record : csvParser) {
                String status = "New";
                String dateCreated = util.getCurrDate();
                String severity = record.get("severity");
//                String subject = record.get("subject");
                String subject = "SystemTicket";
                String username = "admin";
                String media = null;
                System.out.println(record);
                String description = record.get("\uFEFFprompt");
//                String description = null;
                String pollutionCategory = record.get("pollution_category");

                Ticket ticket = new Ticket(status, dateCreated, severity, subject, username, media, description, pollutionCategory);
                ticketRepository.save(ticket);
            }
        }
    }
}
