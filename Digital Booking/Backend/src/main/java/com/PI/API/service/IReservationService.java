package com.PI.API.service;

import com.PI.API.model.Product;
import com.PI.API.model.Reservation;
import com.PI.API.model.dto.ProductDTO;
import com.PI.API.model.dto.ReservationDTO;

import java.time.LocalDate;
import java.util.List;
import java.util.Set;

public interface IReservationService extends ICrudService<ReservationDTO> {


    List<ReservationDTO> findReservationByIdProduct(Long idProduct);
}
