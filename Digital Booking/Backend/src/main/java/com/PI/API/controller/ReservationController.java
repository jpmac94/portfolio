package com.PI.API.controller;

import com.PI.API.model.dto.CategoryDTO;
import com.PI.API.model.dto.RatingDTO;
import com.PI.API.model.dto.ReservationDTO;
import com.PI.API.service.IReservationService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import javax.validation.Valid;
import java.util.List;
import java.util.Set;
@CrossOrigin(origins = "*")
@RestController
@RequestMapping("/api/reservation")
public class ReservationController {
    @Autowired
    private IReservationService reservationService;

    @PostMapping("/save")
    public ResponseEntity<ReservationDTO> save(@Valid @RequestBody ReservationDTO reservationDTO){

        return new ResponseEntity<>( reservationService.save(reservationDTO), HttpStatus.OK);
    }

    @GetMapping("/findById/{id}")
    public ResponseEntity<ReservationDTO> findById(@PathVariable Long id) {
        ReservationDTO reservationDTO = reservationService.findById(id);
        return new ResponseEntity<>(reservationDTO,HttpStatus.OK);
    }
    @GetMapping("/findAll")
    public ResponseEntity<Set<ReservationDTO>> findAll(){
        Set<ReservationDTO> reservationDTOS = reservationService.findAll();
        return new ResponseEntity<>(reservationDTOS, HttpStatus.OK);
    }
    @PutMapping("/updateById/{id}")
    public ResponseEntity<ReservationDTO> update(@Valid @RequestBody ReservationDTO reservationDTO, @PathVariable("id") Long id) {
        ReservationDTO reservationDTOUpdate = reservationService.update(reservationDTO,id);
        return new ResponseEntity<>(reservationDTOUpdate, HttpStatus.OK);
    }


    @DeleteMapping("/deleteById/{id}")
    public ResponseEntity delete(@PathVariable Long id){
        reservationService.delete(id);
        return new ResponseEntity<>("Reservation with id " + id + " has been deleted",HttpStatus.OK);
    }
    @GetMapping("/findReservationByIdProduct")
    public ResponseEntity<List<ReservationDTO>> findReservationByIdProduct(@RequestParam("idProduct") Long idProduct){
        return ResponseEntity.status(HttpStatus.OK).body(reservationService.findReservationByIdProduct(idProduct));
    }
}
